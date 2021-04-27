import React from 'react';
import './CreatePlaylist.scss'
import SearchForm from "../../components/SearchForm/SearchForm";
import
{
  IoEllipsisHorizontalOutline
} from 'react-icons/io5'

const CreatePlaylist = () => {
  return (
    <div className="createPlaylist">
      <div> Create new playlist </div>
      <div>
        <IoEllipsisHorizontalOutline />
        <div className="divider"> </div>
        <div>
          <p>Let's add some music in playlist</p>
          <SearchForm />
        </div>

      </div>

    </div>
  )
}

export default CreatePlaylist;