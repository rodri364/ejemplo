import {
    Outlet,
    Link,
    useLoaderData,
    Form,
  } from "react-router-dom";
  import { getContacts, createContact } from "../registro";
  
  export async function action() {
    const contact = await createContact();
    return { contact };
  }
  
  /* other code */
  
  export default function Root() {
    const { contacts } = useLoaderData();
    return (
      <>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <div>
            {/* other code */}
            <Form method="post">
              <button type="submit">New</button>
            </Form>
          </div>
  
          {/* other code */}
        </div>
      </>
    );
  }