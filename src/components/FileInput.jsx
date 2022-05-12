export default function FileInput({ setter, label }) {
  function onAddImage(event) {
    const file = event.target.files[0];
    setter(file);
  }

  return (
    <label className="file-input label">
      Upload {label} image
      <input type="file" accept="image/png, image/jpeg" onChange={onAddImage} />
    </label>
  );
}
