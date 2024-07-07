
import { Link } from 'react-router-dom'
import '../style/gallery.scss'

export default function Card({ id, title, cover, style}) {

	return (
		<div className="gallery-card" style={style}>
		<Link to={`./src/pages/Logements/${id}`}>
			<img src={cover} alt={title} style={{ objectFit: 'cover' }} />
			<h3 className='title-card'>{title}</h3>	
		</Link>
		</div>
	)
}
