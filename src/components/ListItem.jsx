

export default function ListItem({ item: { name, level } }) {
  return (
    <li>
      <div>이름: {name}</div>
      <div>래밸: {level || '없음'}</div>
    </li>
  )
}
