import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                />

                <textarea
                    placeholder="What heppened today"
                    className="notes__textarea"
                >
                </textarea>

                <div className="notes__image">
                    <img
                        src="https://is3-ssl.mzstatic.com/image/thumb/Purple123/v4/5b/c8/67/5bc867c2-b5e3-9572-0908-138d53d05e32/source/256x256bb.jpg"
                        alt="planet"
                    />
                </div>
            </div>
        </div>
    )
}
