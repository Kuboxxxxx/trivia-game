export const Form = () => {
  return (
    <section id="gameCanvas">
      <form className="form" id="gameForm">
        <div className="mb-3">
          <label for="a" className="form-label">
            Player Name
          </label>
          <input type="text" className="form-control" id="name" required />
        </div>

        <div className="form-label" for="category">
          Difficulty
        </div>
        <div className="d-flex justify-content-around">
          <div className="form-check">
            <label className="form-label" for="easy">
              Easy
            </label>
            <input
              className="form-check-input"
              type="radio"
              name="diff"
              id="easy"
              value="easy"
            />
          </div>

          <div className="form-check">
            <label className="form-label" for="med">
              Medium
            </label>
            <input
              className="form-check-input"
              type="radio"
              name="diff"
              id="med"
              value="med"
            />
          </div>

          <div className="form-check">
            <label className="form-label" for="hard">
              Hard
            </label>
            <input
              className="form-check-input"
              type="radio"
              name="diff"
              id="hard"
              value="hard"
            />
          </div>
        </div>
        <button className="button" type="submit" id="sub">
          Begin!
        </button>
      </form>
    </section>
  );
};
