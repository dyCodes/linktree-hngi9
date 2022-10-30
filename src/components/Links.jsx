
const Links = () => {
  return (
    <div className="links">
      <ButtonLink id="twitter" url="https://twitter.com/dycodes" text="Twitter Link" />

      <ButtonLink id="btn__zuri" url="https://training.zuri.team/" text="Zuri Team" />

      <ButtonLink id="books" url="https://books.zuri.team/" text="Zuri Books" />

      <ButtonLink id="book__python" url="https://books.zuri.team/python-for-beginners?ref_id=dyCodes"
        text="Python Books" />

      <ButtonLink id="pitch" url="https://background.zuri.team/" text="Background Check for Coders" />

      <ButtonLink id="book__design" url="https://books.zuri.team/design-rules" text="Design Books" />
    </div >
  )
}

const ButtonLink = ({ id, url, text }) => {
  return (
    <a href={url} id={id} className="btn link">{text}</a>
  );

}


export default Links