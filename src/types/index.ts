import type { PopoverProps } from "@mui/material/Popover";
import type { PickerProps, ModalCustomProps } from "./utils";

export type PickerAvailableProps = PickerProps & {
  modalProps?: PopoverProps;
  customProps?: ModalCustomProps;
};

export type PickerModalProps = PickerProps & {
  modalProps: PopoverProps;
  customProps: ModalCustomProps;
};

export type PickerBaseProps = PickerProps;

export type Labels = {
  predefinedRanges?: string;
  actions?: {
    apply?: string;
    cancel?: string;
  },
  footer?: {
    startDate?: string;
    endDate?: string;
  }
}