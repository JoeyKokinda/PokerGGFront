
export default function id() {
    return (
      <div className="idcont">
        {/* <h2>Enter your club.gg ID to proceed</h2> */}
        <form className="id-form">
          <div className="form-group">
            <label htmlFor="clubId">ClubGG ID:</label>
            <input type="text" id="clubId" placeholder="####-####" />
          </div>
          <div className="form-group">
            <span className="required-text">*required*</span>
            <span className="text">This is needed to confrim that money deposited will go to you. This id can be found on "Profile" in the ClubGG app.</span>
          </div>
          <button type="submit">Enter</button>
        </form>
      </div>
    );
  }