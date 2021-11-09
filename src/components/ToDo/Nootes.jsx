import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'


const Nootes = ({ notes, onRemove }) => {
    return (
        <TransitionGroup component="ul" className="list-group">
            {notes.map(note => (
                <CSSTransition
                    key={note.id}
                    classNames={'note'}
                    timeout={800}
                >
                    <li className="list-group-item note" key={note.id}>
                        <div>
                            <strong>{note.title}</strong>
                            <small style={{ marginLeft: "20px" }}>{note.date}</small>
                        </div>
                        <button type="button" class="btn btn-danger btn-sm" onClick={() => onRemove(note.id)}>&times;</button>
                    </li>
                </CSSTransition>
            ))}
        </TransitionGroup>
    )
}

export default Nootes
