import store from './store';

export function post(path, body) {
  let state = store.getState();
  let token = state.session && state.session.token;

  return fetch('/ajax' + path, {
    method: 'post',
    credentials: 'same-origin',
    headers: new Headers({
      'x-csrf-token': window.csrf_token,
      'content-type': "application/json; charset=UTF-8",
      'accept': 'application/json',
      'x-auth': token || "",
    }),
    body: JSON.stringify(body),
  }).then((resp) => resp.json());
}

export function get(path) {
  let state = store.getState();
  let token = state.session && state.session.token;

  return fetch('/ajax' + path, {
    method: 'get',
    credentials: 'same-origin',
    headers: new Headers({
      'x-csrf-token': window.csrf_token,
      'content-type': "application/json; charset=UTF-8",
      'accept': 'application/json',
      'x-auth': token || "",
    }),
  }).then((resp) => resp.json());
}



export function submit_timesheet(form) {
let state = store.getState();
  console.log("state", state);
  let data = state.forms.new_timerecord;
  console.log("data", data);

    post('/timesheets', {
      timesheet: {
        jobId: data.jobId,
        date: data.date,
        hours: data.hours,
        status: "New",
      }
    }).then((resp) => {
      console.log(resp);
      if (resp.data) {
        store.dispatch({
          type: 'ADD_TIMESHEET',
          data: [resp.data],
        });
        form.redirect('/timesheet/' + resp.data.id);
      }
      else {
        store.dispatch({
          type: 'CHANGE_NEW_RECORD',
          data: {errors: JSON.stringify(resp.errors)},
        });
      }
    });

}

export function submit_login(form) {
  let state = store.getState();
  let data = state.forms.login;

  post('/sessions', data)
    .then((resp) => {
      console.log(resp);
      if (resp.token) {
        localStorage.setItem('session', JSON.stringify(resp));
        store.dispatch({
          type: 'LOG_IN',
          data: resp,
        });
        form.redirect('/');
      }
      else {
        store.dispatch({
          type: 'CHANGE_LOGIN',
          data: {errors: JSON.stringify(resp.errors)},
        });
      }
    });
}
