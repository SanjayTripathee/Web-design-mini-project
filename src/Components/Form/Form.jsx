import style from "./form.module.css";

export default function Form() {
  return (
    <div>
      <div className={style.prag}>
        <h3>
          Let's Book the Seat(!....Herry Up....!) Only Limited Seat Avilable
        </h3>
      </div>
      <div className={style.maindiv}>
        <div>
          <div className={style.nameml}>
            <div className={style.name}>
              {<label>Name:</label>}
              {<input placeholder="abc" type="text" />}
            </div>
            <div className={style.email}>
              {<label>Email:</label>}
              {<input placeholder="@gmail.com" type="text" />}
            </div>
          </div>
        </div>
        <div>
          <div className={style.fstselect}>
            {<label>Choose Services:</label>}
            <br />
            {<input placeholder="-" type="text" />}
            <br />
            {<select id="Choose Services"></select>}
          </div>

          <br />
          <div className={style.nmber}>
            {<label>Phone No:</label>}
            <br />
            {<select id="Phone">{<option>+977</option>}</select>}
            {<input />}
          </div>
        </div>
        <br />
        <div>
          {<label>File Attachment(Optional)</label>}
          <br />
          {<input placeholder="Document" />}
          <div>
            <br />
            {<label>Plze provide feedback(Optional)</label>}
            <br />
            {<input placeholder="feedback" />}
          </div>
        </div>
        <br />
        <div>{<button>Submit</button>}</div>
      </div>
    </div>
  );
}
