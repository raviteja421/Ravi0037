import rightIcon from "../img/icons/right-icon.svg";
import Doctor from "../img/Medical_Benefits/Doctor.svg";
import Patient from "../img/Medical_Benefits/Patient.svg";
import Hospital from "../img/Medical_Benefits/Hospital.svg";

const MedicalBenefits = () => {
  return (
    <div className="MedicalBenefits">
      <h2 className="title">Medical Benefits</h2>
      <p className="sub-title">
        Having and managing a correct marketing strategy is crucial in a fast
        moving market.
      </p>
      <div class="row mt-5">
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
          <div class="card">
            <div class="card-block block-1">
              <div class="text-center">
                <img src={Doctor} alt="image" />
                <h3 class="card-title">Doctor</h3>
              </div>
              <div class="text-center">
                <p class="card-text">
                  <img src={rightIcon} alt="" class="pr-2" />
                  With supporting text below as a natural.
                </p>
                <p class="card-text">
                  <img src={rightIcon} alt="" class="pr-2" />
                  With supporting text below as a natural.
                </p>
                <p class="card-text">
                  <img src={rightIcon} alt="" class="pr-2" />
                  With supporting text below as a natural.
                </p>
                <p class="card-text">
                  <img src={rightIcon} alt="" class="pr-2" />
                  With supporting text below as a natural.
                </p>
                <p class="card-text">
                  <img src={rightIcon} alt="" class="pr-2" />
                  With supporting text below as a natural.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
          <div class="card">
            <div class="card-block block-2">
              <div class="text-center">
                <img src={Patient} alt="image" />
                <h3 class="card-title">Patient</h3>
              </div>
              <div class="text-center">
                <p class="card-text">
                  <img src={rightIcon} alt="" class="pr-2" />
                  With supporting text below as a natural.
                </p>
                <p class="card-text">
                  <img src={rightIcon} alt="" class="pr-2" />
                  With supporting text below as a natural.
                </p>
                <p class="card-text">
                  <img src={rightIcon} alt="" class="pr-2" />
                  With supporting text below as a natural.
                </p>
                <p class="card-text">
                  <img src={rightIcon} alt="" class="pr-2" />
                  With supporting text below as a natural.
                </p>
                <p class="card-text">
                  <img src={rightIcon} alt="" class="pr-2" />
                  With supporting text below as a natural.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
          <div class="card">
            <div class="card-block block-3">
              <div class="text-center">
                <img src={Hospital} alt="image" />
                <h3 class="card-title">Hospital</h3>
              </div>
              <div class="text-center">
                <p class="card-text">
                  <img src={rightIcon} alt="" class="pr-2" />
                  With supporting text below as a natural.
                </p>
                <p class="card-text">
                  <img src={rightIcon} alt="" class="pr-2" />
                  With supporting text below as a natural.
                </p>
                <p class="card-text">
                  <img src={rightIcon} alt="" class="pr-2" />
                  With supporting text below as a natural.
                </p>
                <p class="card-text">
                  <img src={rightIcon} alt="" class="pr-2" />
                  With supporting text below as a natural.
                </p>
                <p class="card-text">
                  <img src={rightIcon} alt="" class="pr-2" />
                  With supporting text below as a natural.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalBenefits;
