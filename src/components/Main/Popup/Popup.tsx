import { useEffect } from "react";

type PopupProps = {
  title?: string;
  children: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
};

function Popup({
  title,
  children,
  onClose,
  isOpen,
}: PopupProps): React.JSX.Element {
  // Cerrar con tecla ESC
  useEffect(() => {
    if (!isOpen) return;

    const handleEscClose = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [isOpen, onClose]);

  // Cerrar con clic en overlay
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`popup ${isOpen ? "popup_is-opened" : ""}`}
      onClick={handleOverlayClick}
    >
      <div
        className={`popup__content ${
          !title ? "popup__content_content_image" : ""
        }`}
      >
        <button
          aria-label="Close modal"
          className="popup__close"
          type="button"
          onClick={onClose}
        ></button>

        {title && <h3 className="popup__title">{title}</h3>}

        {children}
      </div>
    </div>
  );
}

export default Popup;