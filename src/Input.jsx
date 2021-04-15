import React from 'react';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

export default function Input() {
  return(
    <>
    <div className="bk">
    <ol>
    <li><EmojiObjectsOutlinedIcon /></li>
    <li> <NotificationsOutlinedIcon /></li>
    <li> <EditOutlinedIcon /></li>
    <li> <ArchiveOutlinedIcon /></li>
     <li><DeleteOutlineOutlinedIcon /></li>


    </ol>
    </div>
    </>

  );
}