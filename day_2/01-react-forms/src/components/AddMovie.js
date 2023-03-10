import { useState } from 'react';

function AddMovie({ addNewMovie }) {

  // const [ title, setTitle ] = useState('');
  // const [ director, setDirector ] = useState('');
  // const [ IMDBRating, setIMDBRating ] = useState(5);
  // const [ hasOscars, setHasOscars ] = useState(true);

  const [ formValues, setFormValues ] = useState({
    title: '',
    director: '',
    IMDBRating: 5,
    hasOscars: true
  })

  // const handleTitleInput = (e) => setTitle(e.target.value);
  // const handleDirectorInput = (e) => setDirector(e.target.value);
  // const handleIMDBRatingInput = (e) => setIMDBRating(e.target.value);
  // const handleHasOscarsInput = (e) => setHasOscars(e.target.checked);

  const handleInput = (e) => {
    const { value, name, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormValues({
        ...formValues,
        [name]: checked
      })
    } else {
      setFormValues({
        ...formValues,
        [name]: value
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // const newMovie = {
    //   title,
    //   director,
    //   IMDBRating,
    //   hasOscars
    // }

    addNewMovie(formValues);
    console.log('SUBMIT:', formValues);

  };

  return (
    <div className="AddMovie">
      <h4>Add a Movie</h4>

      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={formValues.title} onChange={handleInput} />

        <label>Director:</label>
        <input type="text" name="director" value={formValues.director} onChange={handleInput} />

        <label>IMDB Rating:</label>
        <input type="number" name="IMDBRating" value={formValues.IMDBRating} onChange={handleInput} />

        <label>Won Oscars:</label>
        <input type="checkbox" name="hasOscars" checked={formValues.hasOscars} onChange={handleInput} />

        <button type="submit">Add a Movie</button>
      </form>
    </div>
  )
}

export default AddMovie;