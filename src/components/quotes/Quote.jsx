import React from 'react';

const Quote = ({quote}) => {
    return (
        <blockquote class="quote-card green-card">
    <p>
      {quote.quote}
    </p>

    <cite>
      {quote.author}
    </cite>
  </blockquote>
    )
}

export default Quote;
