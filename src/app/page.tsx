import Link from "next/link";
import React from "react";
import Image from "next/image";

const page = () => {
    return (
        <div>
            <h1>리그오브레전드 정보 앱</h1>
            <h2>
                Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
            </h2>

            <Link href={`/champions`}>
                <Image
                    src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jhin_37.jpg`}
                    alt="img"
                    width={700}
                    height={500}
                />
                챔피언 목록 보기
            </Link>
            <Link href={`/items`}>
                <Image
                    src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Morgana_26.jpg`}
                    alt="img"
                    width={700}
                    height={500}
                />
                아이템 목록 보기
            </Link>
            <Link href={`/rotation`}>
                <Image
                    src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vayne_2.jpg`}
                    alt="img"
                    width={700}
                    height={500}
                />
                금주 로테이션 확인
            </Link>
        </div>
    );
};

export default page;
