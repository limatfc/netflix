export default function formCheck( form ) {
  if (
    form.title !== "" &&
    form.description !== "" &&
    form.query !== "" &&
    form.type !== "" &&
    form.cast.length !== 0 &&
    form.genres.length !== 0 &&
    form.adjectives.length !== 0
  )
    return true;
    if (
        form.title === "" &&
        form.description === "" &&
        form.query === "" &&
        form.type === "" &&
        form.cast.length === 0 &&
        form.genres.length === 0 &&
        form.adjectives.length === 0
      )
        return false;
}


