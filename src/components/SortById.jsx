

export default function Buttons({ ascending, descending }) {
  return (
    <div>
      <button onClick={ascending} >아이디 오름차순 정렬</button>
      <button onClick={descending} >아이디 내림차순 정렬</button>
    </div>
  )
}
