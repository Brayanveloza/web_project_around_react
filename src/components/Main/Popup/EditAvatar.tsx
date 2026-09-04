function EditAvatar(): React.JSX.Element {
  return (
    <form
      className="popup__form"
      id="edit-avatar-form"
      name="edit-avatar-form"
      noValidate
    >
      <label className="popup__field">
        <input
          id="avatar-url"
          className="popup__input popup__input_type_url"
          name="avatar"
          placeholder="Enlace de la imagen"
          required
          type="url"
        />
        <span className="popup__error" id="avatar-url-error"></span>
      </label>

      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}

export default EditAvatar;