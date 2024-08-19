const Footer = () => {
  return (
    <div className="bg-black text-white flex justify-center px-4">
      <div className="flex flex-col lg:flex-row w-full justify-between max-w-5xl my-10">
        <div className="w-full mb-8 lg:mb-0">
          <div className="text-xl font-bold">Abstract</div>
          <ul className="mt-2">
            <li>Branches</li>
          </ul>
        </div>
        <div className="w-full mb-8 lg:mb-0">
          <div className="text-xl font-bold">Resources</div>
          <ul className="mt-2">
            <li>Blog</li>
            <li>Help Center</li>
            <li>Release Note</li>
            <li>Status</li>
          </ul>
        </div>
        <div className="w-full mb-8 lg:mb-0">
          <div className="text-xl font-bold">Community</div>
          <ul className="mt-2">
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>Dribbble</li>
            <li>Podcast</li>
          </ul>
        </div>
        <div className="w-full mb-8 lg:mb-0">
          <div className="text-xl font-bold">Company</div>
          <ul className="mt-2">
            <li>About Us</li>
            <li>Careers</li>
            <li>Legal</li>
          </ul>
          <div className="text-lg font-bold mt-5">Contact Us</div>
          <ul>
            <li>info@abstract.com</li>
          </ul>
        </div>
        <div className="w-full flex lg:items-end">
          <div>
            <div className="mb-2">
              <i className="fa-solid text-3xl fa-eye"></i>
            </div>
            <div>&copy; Copyright 2022</div>
            <div className="text-md font-semibold">
              Abstract Studio Design, Inc.
            </div>
            <div className="text-md font-semibold">All rights reserved</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
