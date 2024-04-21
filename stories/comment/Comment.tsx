import './comment.css'

interface CommentProps {
    image: string;
    name: string;
    label: string;
    date: string;
}

export const Comment = ({ image, name, label, date }: CommentProps) => (
    <div className='commentBox'>
        <div className='image'>
            {image}
        </div>
        <div className='comment'>
            <h4>{name}</h4>
            <p>{label}</p>
            <label> {date} </label>
        </div>
    </div>
) 