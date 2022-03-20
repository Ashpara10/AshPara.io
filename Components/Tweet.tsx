import React from "react";
import Image from "next/image";

const Tweet = ({ tweet }: any) => {
  const formattedText = tweet?.data?.text.replace(/https:\/\/[\n\S]+/g, "");

  return (
    <div className="max-w-lg rounded-xl px-3.5 py-5 border border-gray-300 bg-white dark:bg-[#111111] dark:border-none">
      <div className="w-full flex items-center justify-between">
        {tweet?.includes?.users.map((u: any) => {
          return (
            <div className="flex items-center justify-center">
              <img
                src={u.profile_image_url}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex pl-2.5  flex-col items-center justify-center">
                <span className="text-lg font-bold">{u.name}</span>
                <span className="text-gray-700 dark:text-gray-400">
                  @{u.username}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full text-lg p-2 ">
        <h1 className="text-lg whitespace-pre-wrap">{formattedText}</h1>
      </div>
      {tweet?.includes?.media && tweet?.includes?.media.length ? (
        <div
          className={
            tweet?.includes?.media.length === 1
              ? "inline-grid grid-cols-1 gap-x-2 gap-y-2 my-2"
              : "inline-grid grid-cols-2 gap-x-2 gap-y-2 my-2"
          }
        >
          {tweet?.includes?.media.map((m: any) => (
            <Image
              key={m.media_key}
              width={m.width}
              height={m.height}
              src={m.url}
              className="rounded-md "
            />
          ))}
        </div>
      ) : null}

      <div className="flex items-center justify-start py-2">
        <div className="flex items-center justify-center gap-x-4 ">
          <a className="flex  items-center justify-center px-1 hover:underline ">
            <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24">
              <path
                className="fill-current"
                d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.813-1.148 2.353-2.73 4.644-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.375-7.454 13.11-10.037 13.156H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.035 11.596 8.55 11.658 1.52-.062 8.55-5.917 8.55-11.658 0-2.267-1.822-4.255-3.902-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.015-.03-1.426-2.965-3.955-2.965z"
              />
            </svg>
            {tweet?.data?.public_metrics.like_count.toString()}
          </a>
          <a className="flex items-center justify-center px-1 hover:underline ">
            <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24">
              <path
                className="fill-current"
                d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.045.286.12.403.143.225.385.347.633.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.368-3.43-7.788-7.8-7.79zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.334-.75-.75-.75h-.395c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"
              />
            </svg>
            {tweet?.data?.public_metrics.reply_count.toString()}
          </a>
          <a className="flex items-center justify-center px-1 hover:underline ">
            <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24">
              <path
                className="fill-current"
                d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"
              />
            </svg>
            {tweet?.data?.public_metrics.retweet_count.toString()}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tweet;