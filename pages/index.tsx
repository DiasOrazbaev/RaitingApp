import {Button, Htag, Pr, Rating, Tag} from "../components";
import {useEffect, useState} from "react";

export default function Home() {
    const [counter, setCounter] = useState<number>(0);

    useEffect(() => {
        console.log('counter: ' + counter);
        return function cleanup() {
            console.log('Unmounting: ' + counter);
        }
    },);

    useEffect(() => {
        console.log('Mounted');
        return function cleanup() {
            console.log('Unmounted');
        }
    });

    const [rating, setRating] = useState<number>(0);
    return (
        <div>
            <Htag tag={'h1'}>Работаем</Htag>

            <Button appearance={'primary'}>Купить</Button>
            <Button appearance={'ghost'} arrow={'right'}>Больше отзывов</Button>

            <Htag tag={'h1'}>{counter} clicks!</Htag>
            <Button appearance={'primary'} onClick={() => setCounter(x => x + 1)}> Click </Button>

            <Pr size={'l'}>Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и ими можно успешно
                пользоваться дома или в дороге. Современные ноутбуки хорошо справляются с нагрузкой, так зачем загонять
                специалиста в душный офис. В этой профессии важным считается вдохновение, поэтому дизайнеры ищут его в
                разных местах.</Pr>

            <Pr size={'m'}>Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft
                skills — навыки, которые позволят эффективно взаимодействовать в команде с менеджерами, разработчиками и
                маркетологами. Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle.</Pr>

            <Pr size={'s'}>Напишу сразу в двух курсах, так как проходил оба. Java будет многим непросвещённым сложновата
                в изучении, но здесь перевес из-за лидирующего положения языка как самого популярного в
                программировании. Выбор мой пал на эту профессию еще и потому, что Java-разработчики получают самую
                большую зарплату. Хотя Python начинает догонять Java по многим моментам, но вот в крупном екоме
                разработке Джава все-таки остается главенствующей сейчас. Скажу так – полнота программы и интенсивность
                присуща обоим курсам GeekBrains. Хочу отметить, что с первого дня занятий вы приступаете к практике и
                получаете опыт коммерческой разработки уже в свое резюме. Скажу вам как прошедший это – реально помогло
                в трудоустройстве!</Pr>
            <Tag color={'ghost'} size={'m'}> Ghost </Tag>
            <Tag color={'green'} size={'s'}> Green </Tag>
            <Tag color={'primary'} size={'s'}> primary </Tag>


            <Rating rating={rating} isEditable={true} setRating={setRating}/>
        </div>
    );
}