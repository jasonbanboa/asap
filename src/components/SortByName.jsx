
export default function SortByName({ ascending, descending }) {
  return (
    <div>
      <button onClick={ascending} >이름 오름차순 정렬</button>
      <button onClick={descending} >이름 내림차순 정렬</button>
    </div>
  )
}
