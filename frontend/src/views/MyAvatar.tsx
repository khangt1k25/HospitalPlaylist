import React, {Fragment} from 'react';
import AvatarEditor from 'react-avatar-editor';

interface avatarProps {
  imageUrl: string;
  width: number;
  height: number;
  scale: number;
}

const MyAvatar = (props: avatarProps) => {
    return (
        <div className='myAvatar'>
          
            <AvatarEditor
            image={props.imageUrl}
            width={props.width}
            height={props.height}
            border={1}
            scale={props.scale}
            rotate={0}
            />
          
        </div>
      )
} 

export default MyAvatar;
 