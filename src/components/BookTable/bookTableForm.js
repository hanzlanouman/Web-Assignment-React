import '../../bookTable.css';

const BookTableForm = () => {
  return (
    <form>
      <label for='name'>Name:</label>
      <input type='text' id='name' name='name' required />

      <label for='email'>Email:</label>
      <input type='text' id='email' name='email' required />

      <label for='phone'>Phone:</label>
      <input type='text' id='phone' name='phone' required />

      <label for='date'>Date:</label>
      <input type='text' id='date' name='date' required />

      <label for='time'>Time:</label>
      <input type='text' id='time' name='time' required />

      <label for='guests'>Number of guests:</label>
      <select id='guests' name='guests' required>
        <option value=''>Please select</option>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
        <option value='6+'>6 or more</option>
      </select>

      <input type='submit' value='Book Now' />
    </form>
  );
};

export default BookTableForm;
