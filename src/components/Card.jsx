import News from '../assets/constant/News.json'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import Button from './Button';
console.log(News)
function Card() {
    return (
        <ul className="card-container" >
            {News.reverse().map((newx) => (
                <li>
                    <img src={newx.newsImage[0]} alt="Image" />
                    <div className="decription">
                        <h3>{newx.newsMainTitle}</h3>
                        <p className='short'>{newx.newsSummaryDescription}</p>
                        <div className='icons'>
                            <div className='likes'>
                                <ThumbUpOutlinedIcon style={{ fontSize: "24px" }} />
                                <p>{newx.likes.length}</p>
                            </div>
                            <div className='dislikes'>
                                <ThumbDownOffAltOutlinedIcon style={{ fontSize: "24px" }} />
                                <p>{newx.dislikes.length}</p>
                            </div>
                            <div className='comment'>
                                <MapsUgcOutlinedIcon style={{ fontSize: "24px" }} />
                                <p>{newx.comment.length}</p>
                            </div>
                        </div>
                        <div className='btn-cont'>
                            <Button backgrounds="#161c30" textColor="#fff" name="Read-More"></Button>
                        </div>

                    </div>
                </li>
            ))}

        </ul>
    )
}
export default Card;