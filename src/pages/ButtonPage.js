import {
  GoBell,
  GoCloudDownload,
  GoComment,
  GoGear,
  GoFileMedia,
} from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  return (
    <div>
      <div>
        <Button success rounded outline className='mb-5'>
          <GoBell />
          Click me
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCloudDownload />
          Buy now
        </Button>
      </div>
      <div>
        <Button warning>
          <GoComment />
          See deal
        </Button>
      </div>
      <div>
        <Button secondary outline>
          <GoGear />
          Hide ads
        </Button>
      </div>
      <div>
        <Button primary rounded>
          <GoFileMedia />
          Something
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
