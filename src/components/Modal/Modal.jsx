import '../DeleteWarning/DeleteWarning.css';

export default function DeleteWarning({ handleShow }) {
  return(
    <>
      <div id="popup-modal" className="modal-overlay" tabIndex="-1">
        <div className="modal-content">
          <div className="modal-body">
            {/* <svg className="modal-icon" aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg> */}
            <h3 className="modal-title">Helping to get food to those in need takes both a Distributor and a Receiver. A Distributor role is designated for those who have excess food that could go to help many in need. A Receiver role is meant for those who prepare the food directly to the people in need and are in need of donated food to work with. </h3>
            <div className="modal-btn-group">
              <button onClick={handleShow} className="modal-cancel-btn" type="button" data-modal-hide="popup-modal">
                x
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}