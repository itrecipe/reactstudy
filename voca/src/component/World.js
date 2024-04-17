export default function World() {
    return (
        <div>
            {/* JSX는 하나의 태그만 감쌀수 있어서
                빈태그로 감싸줘야 두개의 태그를 사용할 수 있다.
                똑같은 컴포넌트 여러번 사용가능
            */}
            <>
                <h1>Hello</h1>
                <World />
                <World />
            </>
        </div>
    )
}