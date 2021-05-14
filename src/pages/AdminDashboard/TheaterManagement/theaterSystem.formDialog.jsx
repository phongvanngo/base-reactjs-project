import { Dialog, Transition } from "@headlessui/react";
import { closeTheaterSystemFormDialog } from "app/redux/dialogSlice";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
  createTheaterSystem,
  updateTheaterSystem,
} from "app/redux/theaterSlice";

export default function TheaterSystemFormModal() {
  const { register, handleSubmit, setValue } = useForm();

  const dispatch = useDispatch();
  const { isOpen, defaultData } = useSelector(
    (state) => state.dialog.theaterSystemFormDialog
  );

  console.log(defaultData);

  function onSaveData(data) {
    if (defaultData?.id === null) {
      console.log(data);
      dispatch(createTheaterSystem(data));
      dispatch(closeTheaterSystemFormDialog());
    } else {
      dispatch(updateTheaterSystem({ ...data, id: defaultData.id }));
      dispatch(closeTheaterSystemFormDialog());
    }
  }
  function handleCloseModal() {
    dispatch(closeTheaterSystemFormDialog());
  }

  console.log("render");

  useEffect(() => {
    if (defaultData?.id) {
      const { name, alias, logo } = defaultData;
      setValue("name", name);
      setValue("alias", alias);
      setValue("logo", logo);
    } else {
      setValue("name", "");
      setValue("alias", "");
      setValue("logo", "");
    }
  }, [setValue, defaultData]);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-60"
          onClose={() => {}}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="p-0 inline-block w-full max-w-md my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 border-b"
                >
                  <div className="pr-5 pl-5 pt-4 pb-3 w-full flex justify-between">
                    <h1 className="font-normal">
                      {defaultData?.id
                        ? "Chỉnh sửa hệ thống rạp chiếu phim"
                        : "Thêm hệ thống rạp chiếu"}
                    </h1>
                    <button
                      onClick={handleCloseModal}
                      className="focus:outline-none hover:text-gray-400"
                    >
                      <i className="bx bx-x text-xl"></i>
                    </button>
                  </div>
                </Dialog.Title>
                <form onSubmit={handleSubmit(onSaveData)}>
                  <div className="mt-2 p-6">
                    <div className="mb-8">
                      <span className="mb-2 flex flex-col font-extrabold">
                        Tên hệ thống rạp chiếu
                      </span>
                      <input
                        type="text"
                        {...register("name", {})}
                        className="h-full w-full appearance-none rounded-full border w-30 py-4 px-6 leading-tight focus:outline-none focus:border-indigo-500 text-gray-500"
                      />
                    </div>
                    <div className="mb-8">
                      <span className="font-extrabold mb-2 flex flex-col">
                        Bí danh
                      </span>
                      <input
                        type="text"
                        {...register("alias", {})}
                        className="h-full w-full appearance-none rounded-full border w-30 py-4 px-6 leading-tight focus:outline-none focus:border-indigo-500 text-gray-500"
                      />
                    </div>
                    <div className="mb-8">
                      <span className="font-extrabold mb-2 flex flex-col">
                        Logo
                      </span>
                      <input
                        type="text"
                        {...register("logo", {})}
                        className="h-full w-full appearance-none rounded-full border w-30 py-4 px-6 leading-tight focus:outline-none focus:border-indigo-500 text-gray-500"
                      />
                    </div>
                  </div>

                  <div className="mb-4 p-6 overflow-hidden">
                    <input
                      type="submit"
                      value="Lưu"
                      className="inline-flex float-right px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={() => {
                        handleSubmit(onSaveData);
                      }}
                    />
                  </div>
                </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
