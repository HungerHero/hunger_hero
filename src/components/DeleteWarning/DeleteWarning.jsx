import './DeleteWarning.css'

export default function DeleteWarning({ handleDelete, showModal, cardType }) {
  return(
    <>
      <div id="popup-modal" className="modal-overlay" tabIndex="-1">
        <div className="modal-content">
          <div className="modal-body">
            <svg className="modal-icon" aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
            <h3 className="modal-title">
            {cardType === 'pickup' ?
              'Are you sure you want to delete this pickup?'
              :
              'Are you sure you want to delete this product?'
            }
            </h3>
            <div className="modal-btn-group">
              <button onClick={handleDelete} className="modal-confirm-btn" type="button" data-modal-hide="popup-modal">
                Yes, I'm sure
              </button>
              <button onClick={showModal} className="modal-cancel-btn" type="button" data-modal-hide="popup-modal">
                No, cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}