import { useForm, ValidationError } from "@formspree/react";
import styles from "./form.module.scss";
import CircularProgress from "@mui/material/CircularProgress";
import { SubTitulo } from "../SubTitulo/SubTitulo";

function Form() {
  const [state, handleSubmit] = useForm("mldjlyor");
  //console.log("state", state);

  return (
    <div className={styles.form}>
      {state.succeeded === true && state.submitting === false ? (
        <p className={styles.message}> Thanks! I will be in touch with you</p>
      ) : (
        ""
      )}

      {state.submitting === true ? (
        <CircularProgress color="secondary" />
      ) : (
        <form onSubmit={handleSubmit} action="mldjlyor" method="POST" >
          <SubTitulo text="Contact Me" id="contact"/>
          <div>
          <label className={styles.label} htmlFor="email">Send an email!</label>
          <input
            id="email"
            type="email"
            name="email"
            className={styles.mail}
            placeholder="Your Email Address"
          />
          </div>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            id="message"
            name="message"
            className={styles.textarea}
            placeholder="Message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            disabled={state.submitting}
            className={styles.button}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
export default Form;