import React from "react";

function ShowModal({ user }) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="year" className="form-label">
            Year
          </label>
          <input
            type="text"
            className="form-control"
            id="year"
            name="year"
            value={user.year}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="program" className="form-label">
            Program
          </label>
          <textarea
            type="text"
            className="form-control"
            id="program"
            name="program"
            value={user.program}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            image
          </label>
          <input
            type="file"
            className="form-control "
            id="image"
            name="image"
            // value={user.image}
            onChange={(event) => setFile(event.target.files[0])}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            Caption
          </label>
          <textarea
            type="text"
            className="form-control"
            id="caption"
            name="caption"
            value={user.caption}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="status" className="form-label">
            Status
          </label>
          <textarea
            className="form-control"
            id="status"
            name="status"
            value={user.status}
            onChange={handleInputChange}
            required
          />
        </div>
      </form>
    </div>
  );
}

export default ShowModal;
