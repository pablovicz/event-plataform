import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Loader } from "../components/Loader";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";
import { useGetLessonsSlugsQuery } from "../graphql/generated";


export function Event() {

    const { data } = useGetLessonsSlugsQuery();

    const { slug } = useParams<{ slug: string }>();

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if ((location.pathname === '/event' || location.pathname === '/event/lesson') && !!data) {
            navigate(`/event/lesson/${data?.lessons[0].slug}`);
        }
    }, [location.pathname, data])


    if(!data){

        return (
            <Loader />
        );
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1">
                {!!slug ? (
                    <Video lessonSlug={slug as string} />
                ) : (
                    <div className="flex-1" />
                )}
                <Sidebar />
            </main>
        </div>
    );
}