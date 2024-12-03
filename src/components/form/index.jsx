import React, { useState } from 'react'

import '../form/index.css';

function Form() {
    return (
        <div>
            <div className="form__container container">
                <form>
                    <div className="form__title">
                        <h1>Kompaniya ma’lumotlari</h1>
                        <h4>Kompaniya haqidagi ma’lumotlarni kiriting</h4>
                    </div>
                    <div className="form__input">
                        <h4>Kompaniya nomi *</h4>
                        <input type="text" placeholder='Kompaniya nomi' />
                        <br />
                        <h4>Email *</h4>
                        <input type="email" placeholder='Email' />
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Form
