const card = ({ title, image, abbr }) => {
    return (<>
    <div style={{ width: '18px', height: '180px', margin:'10px', border: '1px solid black', borderRadius: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', alignContent: 'center', textAlign: 'center' }}>
        <img src={image} alt={abbr} style={{ width: '100px', height: '100px'}} />
        <div >{title}</div>
    </div>
    </>);
}
export default card;