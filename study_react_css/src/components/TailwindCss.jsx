/* Tailwind CSS : 최근 인기 많은 CSS 프레임워크
   React뿐만 아니라 Vue 또는 html에서도 사용 가능하다. */

export const TailwindCss = () => {
    return (
        /* 기존 코드
        <div>
            <p>Tailwind CSS!</p>
            <button>Button</button>
        </div>
        */

        // Tailwind를 사용하는 코드
        <div className="border border-gray-400 rounded-2xl p-2 m-2 flex justify-around items-center">
            <p className="m-0 text-gray-400">Tailwind CSS!</p>
            <button className="bg-gray-300 border-0 p-2 rounded-md hover:bg-gray-400 hover:text-white">Button</button>
        </div>
    );
};
   