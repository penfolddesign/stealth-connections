import React from 'react'

const ActiveCampaign = () => {
    return (
       <>
        <div className="signup-form">

        <form method="POST" action="https://stealthconnections.activehosted.com/proc.php" id="form_1" class="_form _form_1 _inline-form  _dark" novalidate>
    <input type="hidden" name="u" value="1" />
    <input type="hidden" name="f" value="1" />
    <input type="hidden" name="s" />
    <input type="hidden" name="c" value="0" />
    <input type="hidden" name="m" value="0" />
    <input type="hidden" name="act" value="sub" />
    <input type="hidden" name="v" value="2" />
    <div class="form-content">
      <div class="_form_element _x29786320 _full_width " >
        <label for="fullname" class="_form-label">
          Full Name*
        </label>
        <div class="_field-wrapper">
          <input type="text" id="fullname" name="fullname" placeholder="Type your name" required/>
        </div>
      </div>
      <div class="_form_element _x64270476 _full_width " >
        <label for="email" class="_form-label">
          Email*
        </label>
        <div class="_field-wrapper">
          <input type="text" id="email" name="email" placeholder="Type your email" required/>
        </div>
      </div>
      <div class="_form_element _x00845546 _full_width " >
        <label for="phone" class="_form-label">
          Phone*
        </label>
        <div class="_field-wrapper">
          <input type="text" id="phone" name="phone" placeholder="Type your phone number" required/>
        </div>
      </div>
      <div class="_form_element _field1 _full_width " >
        <label for="field[1]" class="_form-label">
          Town/City*
        </label>
        <div class="_field-wrapper">
          <input type="text" id="field[1]" name="field[1]" placeholder="Where are you from?" required/>
        </div>
      </div>
      <div class="_form_element _field2 _full_width " >
        <label for="field[2]" class="_form-label">
          Gender*
        </label>
        <div class="_field-wrapper">
          <select name="field[2]" id="field[2]" required>
            <option selected>
            </option>
            <option value="Male" >
              Male
            </option>
            <option value="Female" >
              Female
            </option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
      <div class="_form_element _field3 _full_width " >
        <label for="field[3]" class="_form-label">
          Date of Birth *
        </label>
        <div class="_field-wrapper">
          <input type="text" id="field[3]" name="field[3]"placeholder="DD/MM/YYYY" required/>
        </div>
      </div>
      <div class="_form_element _field4 _full_width " >
        <label for="field[4]" class="_form-label">
          Instagram Username *
        </label>
        <div class="_field-wrapper">
          <input type="text" id="field[4]" name="field[4]" placeholder="Eg. @stealthconnections" required/>
        </div>
      </div>
      <div class="_form_element _field5 _full_width " >
        <label for="field[5]" class="_form-label">
          Favourite Genres of Music*
        </label>
        <div class="_field-wrapper">
          <input type="text" id="field[5]" name="field[5]" placeholder="What do you like to listen to?" required/>
        </div>
      </div>
      <div class="_form_element _field6 _full_width " >
        <label for="field[6]" class="_form-label">
          Describe yourself in one sentence?*
        </label>
        <div class="_field-wrapper">
          <input type="text" id="field[6]" name="field[6]" placeholder="Tell us about yourself." required/>
        </div>
      </div>
      <div class="_form_element _field7 _full_width " >
        <label for="field[7]" class="_form-label">
          Why should your name be on the guest-list? *
        </label>
        <div class="_field-wrapper">
          <input type="text" id="field[7]" name="field[7]" placeholder="Give us some reasons why..." required/>
        </div>
      </div>
    
      <div class="_button-wrapper _full_width">
        <button id="_form_1_submit" class="_submit" type="submit">
          Request Invite
        </button>
      </div>
      <span>By clicking 'Request Invite' you agree to your processing of data through Active Campaign. Please visit their website for full terms and privacy policies.</span>
      <div class="_clear-element">
      </div>
    </div>
  </form>

        </div>



       </>


    )
}

export default ActiveCampaign
