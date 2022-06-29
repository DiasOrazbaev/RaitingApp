import {Button, Htag} from "../components";

export default function Home() {
    return (
        <div>
            <Htag tag={'h1'}>Работаем</Htag>

            <Button appearance={'primary'} >Купить</Button>
            <Button appearance={'ghost'} arrow={'right'}>Больше отзывов</Button>
        </div>
    );
}