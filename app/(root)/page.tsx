import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const Page = async () => {
  const session = await auth();

  console.log("Session:", session);

  return (
    <>
      <h1 className="h1-bold font-space-grotesk">Welcome to ultimate next course</h1>

      <form
        className="px-10 pt-25"
        action={async () => {
          "use server";
          await signOut({
            redirectTo: ROUTES.SIGN_IN,
          });
        }}
      >
        <Button type="submit">Logout</Button>
      </form>
    </>
  );
};

export default Page;
