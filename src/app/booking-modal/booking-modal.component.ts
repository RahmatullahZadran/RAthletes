import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking-modal',
  templateUrl: './booking-modal.component.html',
  styleUrls: ['./booking-modal.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class BookingModalComponent {
  @Output() bookingConfirmed = new EventEmitter<{ firstName: string; lastName: string; date: string }>();
  @Output() modalClosed = new EventEmitter<void>();

  firstName: string = '';
  lastName: string = '';
  selectedDate: string = '';

  submitBooking() {
    // Emit event with booking details
    this.bookingConfirmed.emit({ firstName: this.firstName, lastName: this.lastName, date: this.selectedDate });
  }

  closeModal() {
    // Emit event to indicate modal close
    this.modalClosed.emit();
  }
}
