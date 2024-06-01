import { Helmet } from 'react-helmet-async';

import { CatgeoryView } from 'src/sections/category/view';

// ----------------------------------------------------------------------

export default function UserPage() {
  return (
    <>
      <Helmet>
        <title> Catgeory </title>
      </Helmet>

      <CatgeoryView />
    </>
  );
}
