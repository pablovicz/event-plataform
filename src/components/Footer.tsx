import { RocketseatLogo } from "./RocketseatLogo";


export function Footer() {
    return (
        <footer className="w-full bg-gray-900 border-t border-gray-600 items-center">
            <div className="w-full max-w-[1100px] p-6 flex flex-row justify-between items-center mx-auto">
                <div className="flex flex-start gap-6 items-center">
                    <RocketseatLogo />
                    <span className="text-sm text-gray-200">
                        Promovido por Rocketseat - Todos os direitos reservados
                    </span>
                </div>
                <a href="https://www.rocketseat.com.br/privacy" target="_blank" rel="noopennorel" className="text-sm text-gray-200 items-center hover:text-green-700 transition-colors">
                    Políticas de privacidade
                </a>
            </div>
        </footer>
    );
}