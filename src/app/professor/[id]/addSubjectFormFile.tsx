type AddSubjectFormFileProps = {
  file: File
  onDeleteClick: () => void
}
const AddSubjectFormFile = (props: AddSubjectFormFileProps) => {
  const {file} = props;
  console.log(file)
  return (
      <caption>AddSubjectFormFile</caption>
  );
}

export default AddSubjectFormFile;
