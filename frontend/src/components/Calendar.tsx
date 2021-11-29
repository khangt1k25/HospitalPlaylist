import React from 'react';
import {Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, EventSettingsModel} from '@syncfusion/ej2-react-schedule';
import {DropDownListComponent} from '@syncfusion/ej2-react-dropdowns';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import {L10n} from '@syncfusion/ej2-base';

L10n.load(
    {
        'en-US': {
            'schedule': {
                'saveButton': 'Add',
                'cancelButton': 'Cancel',
                'deleteButton': 'Remove',
                'newEvent': 'Add event'
            }
        }
    }
)

const Calendar = () => {
    let localData = [
        {
            Id: 1,
            Subject: 'John',
            EventType: 'Requested',
            StartTime: new Date(2021, 11, 29, 6, 0),
            EndTime: new Date(2021, 11, 29, 7 ,0)
        },
        {
            Id: 2,
            Subject: 'Steve',
            EventType: 'Confirmed',
            StartTime: new Date(2021, 11, 30, 8, 0),
            EndTime: new Date(2021, 11, 30, 10 ,0)
        },
        {
            Id: 1,
            Subject: 'James',
            EventType: 'Confirmed',
            StartTime: new Date(2021, 11, 30, 10, 0),
            EndTime: new Date(2021, 11, 30, 11, 0)
        }
    ]
    let editorWindowTemplate = (props: any) => {
        return(
            <table className='custom-event-editor' style={{width: '100%'}}>
                <tbody>
                    <tr>
                        <td className='e-textlabel'>Summary</td>
                        <td><input id='Summary' className='e-field e-input' name='Subject' type='text' style={{width: '100%'}}/></td>
                    </tr>
                    <tr>
                        <td className='e-textlabel'>Status</td>
                        <td>
                            <DropDownListComponent id='EventType' className='e-field' dataSource={['New', 'Requested', 'Confirmed']} 
                            placeholder='Choose status' data-name='EventType' value={props.EventType || null} style={{width: '100%'}}> 
                            </DropDownListComponent>
                        </td>
                    </tr>
                    <tr>
                        <td className='e-textlabel'>From</td>
                        <td>
                            <DateTimePickerComponent id='StartTime' className='e-field' data-name='StartTime' value={new Date(props.startTime || props.StartTime)} format='dd/MM/yy hh:mm a'>
                            </DateTimePickerComponent>
                        </td>
                    </tr>
                    <tr>
                        <td className='e-textlabel'>To</td>
                        <td>
                            <DateTimePickerComponent id='EndTime' className='e-field' data-name='EndTime' value={new Date(props.endTime || props.EndTime)} format='dd/MM/yy hh:mm a'>
                            </DateTimePickerComponent>
                        </td>
                    </tr>
                    <tr>
                        <td className='e-textlabel'>Note</td>
                        <td>
                            <textarea id='Description' className='e-field e-input' name='Description' rows={3} cols={50} style={{width: '100%', height:'60px', resize:'vertical'}}></textarea>
                        </td>
                    </tr>
                   
                </tbody>
            </table>
        )
    }
    return (
        <div style={{marginBottom:'auto'}}>
            <ScheduleComponent currentView='Week' selectedDate={new Date(2021, 11, 29)}
                eventSettings={{dataSource: localData}}
                views={['Day', 'Week', 'Month', 'TimelineDay', 'TimelineWeek']}
                editorTemplate={editorWindowTemplate.bind(this)}
            >
                <Inject services={[Day, Week, Month, Agenda]} />
            </ScheduleComponent>
        </div>
      
    )
}
export default Calendar