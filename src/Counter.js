import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';



export function Counter() {

  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  const incrementLike = () => setLike(like + 1);
  const decrementLike = () => setDisLike(like + 1);
  return (
    <div className="counter-container">
      <IconButton aria-label="like movie" color="primary" className="likes-dislikes" 
      onClick={incrementLike}> 
      <Badge badgeContent={like} color="primary">👍🏽</Badge>  
      </IconButton>
       
      <IconButton aria-label="dislike movie"  color="error" className="likes-dislikes" 
      onClick= {decrementLike}> 
      <Badge badgeContent={disLike} color="error">👎🏼</Badge></IconButton>
    </div>
  );
}
