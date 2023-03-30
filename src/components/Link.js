export default function FooterLink (props) {
    return (
        <>
            <a href={props.link} target="_blank" rel="noreferrer" className='footer-link'>{props.text}</a>
        </>
    )
}