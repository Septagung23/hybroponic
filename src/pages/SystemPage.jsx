import { useForm } from "react-hook-form";
import ResponsiveAppBar from "../components/Navbar";
import "./SystemPage.css";

export default function SystemPage() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    try {
      console.log(
        data.suhuAt,
        data.suhuBh,
        data.pHAt,
        data.pHBh,
        data.tdsAt,
        data.tdsBh
      );
    } catch (error) {}
  };

  return (
    <>
      <ResponsiveAppBar />
      <div className="setting-container">
        <div className="title">
          <h1>System Setting</h1>
          <p>
            Silakan isi form dibawah ini untuk mengatur batas bawah dan batas
            atas untuk nilai parameter suhu, pH, dan TDS air pada pipa
            Hidroponik Anda.
          </p>
        </div>
        <form className="setting-form" onSubmit={handleSubmit(onSubmit)}>
          <h2>Suhu</h2>
          <div className="form">
            <div>
              <label htmlFor="suhuAtas">Batas Atas</label>
              <input {...register("suhuAt")} id="suhuAtas" type="number" />
            </div>
            <div>
              <label htmlFor="suhuBawah">Batas Bawah</label>
              <input {...register("suhuBh")} id="suhuBawah" type="number" />
            </div>
          </div>
          <h2>pH</h2>
          <div className="form">
            <div>
              <label htmlFor="suhuAtas">Batas Atas</label>
              <input {...register("pHAt")} id="suhuAtas" type="number" />
            </div>
            <div>
              <label htmlFor="suhuBawah">Batas Bawah</label>
              <input {...register("pHBh")} id="suhuBawah" type="number" />
            </div>
          </div>
          <h2>TDS</h2>
          <div className="form">
            <div>
              <label htmlFor="suhuAtas">Batas Atas</label>
              <input {...register("tdsAt")} id="suhuAtas" type="number" />
            </div>
            <div>
              <label htmlFor="suhuBawah">Batas Bawah</label>
              <input {...register("tdsBh")} id="suhuBawah" type="number" />
            </div>
          </div>
          <div className="button">
            <button>Reset</button>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </>
  );
}
