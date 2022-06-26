import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}



export function Lesson({ title, slug, availableAt, type }: LessonProps) {

    const [isActive, setIsActive] = useState(false);

    const isLessonAvailable = isPast(availableAt);

    const availableDateFormat = format(availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
        locale: ptBR
    });

    const { slug: pathSlug } = useParams<{ slug: string }>();

    useEffect(() => {
        if (pathSlug === slug) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [location.pathname]);

    return (
        <Link to={`/event/lesson/${slug}`} className='group'>
            <span className="text-gray-300">
                {availableDateFormat}
            </span>
            <div className={isActive ? ('rounded bg-green-300 p-4 mt-2 cursor-not-allowed') : ('rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500')}>
                <header className="flex items-center justify-between">
                    {
                        isLessonAvailable ? (
                            <span className={`text-sm ${isActive ? 'text-white' : 'text-blue-500'} font-medium flex items-center gap-2`}>
                                <CheckCircle size={20} />
                                Conteúdo Liberado
                            </span>
                        ) : (
                            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                                <Lock size={20} />
                                Em breve
                            </span>
                        )
                    }
                    <span className={`text-xs rounded px-0.5 py-[0.125rem] text-white border ${isActive ? 'border-white' : 'border-green-300'} font-bold `}>
                        {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>
                <strong className={`mt-5 block ${isActive ? 'text-white' : 'text-gray-200'}`}>
                    {title}
                </strong>
            </div>
        </Link>
    );
}