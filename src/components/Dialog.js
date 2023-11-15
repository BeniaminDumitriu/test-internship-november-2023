import React, { useState } from "react";
import "./componentsUI/Dialog.css";

const Dialog = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  const handleDelete = () => {
    closeDialog();
  };

  return (
    <div>
      <button onClick={openDialog} className="delete-button">
        Delete
      </button>

      {isDialogOpen && (
        <div className="dialog">
          <p>Are you sure you want to delete?</p>
          <button onClick={handleDelete} className="yes-button">
            Yes
          </button>
          <button onClick={closeDialog} className="no-button">
            No
          </button>
        </div>
      )}
    </div>
  );
};

export default Dialog;
